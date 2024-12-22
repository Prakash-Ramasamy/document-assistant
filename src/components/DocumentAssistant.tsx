import React, { Component } from 'react';
import { TextField, PrimaryButton } from "@fluentui/react";
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import './DocumentAssistant.css';
import FileUpload from "../reusable_components/FileUpload";

interface IDocumentAssitantState {
    file: any;
    searchQuery: string;
}

export default class DocumentAssitant extends Component<any, IDocumentAssitantState> {
    constructor(props: any) {
        super(props);
        this.state = {
            file: null,
            searchQuery: '',
        };
    }

    handleFileChange = (event: any) => {
        this.setState({ file: event.target.files[0] });
    };

    handleSearchChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        this.setState({ searchQuery: newValue || '' });
    };

    handleSearch = () => {
        const { file, searchQuery } = this.state;
        console.log('Uploaded File:', file);
        console.log('Search Query:', searchQuery);
        // Implement further logic here
    };

    handleFileUpload = (file: File) => {
        console.log("File uploaded:", file.name);
    };

    render() {
        return (
            <div className="ms-Grid" dir='ltr'>
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <FileUpload onFileUpload={this.handleFileUpload} />
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4">
                        <TextField
                            label="Search your document"
                            multiline
                            rows={7}
                            className='textArea'
                            styles={{ fieldGroup: { marginTop: "10px", borderRadius: "10px" } }}
                            placeholder="Search your document here..."
                            value={this.state.searchQuery}
                            onChange={this.handleSearchChange}
                        />
                    </div>
                    <div className="ms-Grid-col ms-sm4 ms-md4 ms-lg4 search-button-container">
                        <PrimaryButton
                            iconProps={{ iconName: 'DocumentSearch' }}
                            className='search-button'
                            onClick={this.handleSearch}
                            text='Search in Document'
                        />
                    </div>
                </div>
            </div>
        );
    }
}