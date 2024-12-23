import React, { useState } from 'react';
import { TextField, PrimaryButton } from "@fluentui/react";
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import './DocumentAssistant.css';
import FileUpload from "../reusable_components/FileUpload";
import { ReadDocument, SummarizeDocument } from "../services/azureServices";
import Loader from "../reusable_components/Loader";

const DocumentAssistant: React.FC = () => {
    const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [fileError, setFileError] = useState<string>('');
    const [queryError, setQueryError] = useState<string>('');
    const [summary, setSummary] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSearchChange = (
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ) => {
        setSearchQuery(newValue || '');
        setQueryError(''); // Clear error when user starts typing
    };

    const handleSearch = async () => {
        let hasError = false;

        if (!fileBuffer) {
            setFileError('This field is required');
            hasError = true;
        } else {
            setFileError('');
        }

        if (!searchQuery.trim()) {
            setQueryError('This field is required');
            hasError = true;
        } else {
            setQueryError('');
        }

        if (!hasError && fileBuffer) {
            setIsLoading(true);
            try {
                const response = await ReadDocument(fileBuffer);
                const summary = await SummarizeDocument(response, searchQuery);
                setSummary(summary);
                console.log('Response:', response);
            } catch (error) {
                console.error('Error reading document:', error);
                alert('An error occurred while processing the document.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleFileUpload = async (uploadedFile: File) => {
        if (uploadedFile) {
            const arrayBuffer = await uploadedFile.arrayBuffer();
            setFileBuffer(arrayBuffer);
            setFileError(''); // Clear error when file is uploaded
        }
        console.log("File uploaded:", uploadedFile.name);
    };

    return (
        <>
            {isLoading && <Loader />}
            <div className="ms-Grid" dir="ltr">
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <FileUpload onFileUpload={handleFileUpload} errorMessage={fileError} />
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <TextField
                            label="What Are You Looking For From Your Document?"
                            multiline
                            required
                            rows={7}
                            className="textArea"
                            placeholder="Enter Your Query"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            errorMessage={queryError}
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 search-button-container">
                        <PrimaryButton
                            iconProps={{ iconName: "DocumentSearch" }}
                            className="search-button"
                            onClick={handleSearch}
                            text="Search in Document"
                        />
                    </div>
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: summary }} />
                </div>
            </div>
        </>
    );
};

export default DocumentAssistant;