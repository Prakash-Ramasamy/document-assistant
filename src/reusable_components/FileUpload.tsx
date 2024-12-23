import React, { useState } from "react";
import {
    Stack,
    Text,
    Label,
    IStackStyles,
    IStackTokens,
} from "@fluentui/react";

interface FileUploadProps {
    label?: string; // Optional label for the file upload
    onFileUpload?: (file: File) => void;
    errorMessage?: string; // Optional error message for the file upload
}

const FileUpload: React.FC<FileUploadProps> = ({
    label = "Choose your file", // Default label text
    onFileUpload,
    errorMessage,
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileSizeError, setFileSizeError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            // Check if file size exceeds 8 MB
            if (file.size > 8 * 1024 * 1024) {
                setFileSizeError("File size should not exceed 8 MB");
                setSelectedFile(null);
                return;
            }

            setSelectedFile(file);
            setFileSizeError(null);

            // Optional callback for the parent component
            if (onFileUpload) {
                onFileUpload(file);
            }
        }
    };

    // Responsive styles
    const containerStyles: IStackStyles = {
        root: {
            maxWidth: "100%",
            width: "400px",
            margin: "0 auto",
            padding: "20px",
        },
    };

    const uploadBoxStyles: IStackStyles = {
        root: {
            width: "100%",
            padding: "20px",
            border: "2px dashed #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
            position: "relative",
            boxSizing: "border-box",
        },
    };

    const uploadBoxStylesError: IStackStyles = {
        root: {
            width: "100%",
            padding: "20px",
            border: "2px dashed #A4262C",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
            position: "relative",
            boxSizing: "border-box",
        },
    };

    const stackTokens: IStackTokens = { childrenGap: 10 };

    return (
        <Stack styles={containerStyles} tokens={stackTokens}>
            <Label required htmlFor="file-upload" styles={{ root: { fontWeight: "600" } }}>
                {label}
            </Label>

            <Stack
                style={{ height: "134px" }}
                horizontalAlign="center"
                verticalAlign="center"
                styles={errorMessage || fileSizeError ? uploadBoxStylesError : uploadBoxStyles}
                tokens={stackTokens}
            >
                <Text variant="large">Drag and drop your file here</Text>
                <Text variant="smallPlus" styles={{ root: { color: "#6a6a6a" } }}>
                    or click to select a file
                </Text>
                <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf" // Restricts file types
                    style={{
                        opacity: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                    }}
                />

                {selectedFile ? (
                    <Text variant="small" styles={{ root: { color: "green", fontWeight: "bold" } }}>
                        Selected File: {selectedFile.name}
                    </Text>
                ) : (
                    <Text variant="small" styles={{ root: { color: "#888" } }}>
                        No file selected
                    </Text>
                )}
            </Stack>
            {errorMessage && (
                <Text variant="small" styles={{ root: { color: "rgb(164, 38, 44)" } }}>
                    {errorMessage}
                </Text>
            )}
            {fileSizeError && (
                <Text variant="small" styles={{ root: { color: "rgb(164, 38, 44)" } }}>
                    {fileSizeError}
                </Text>
            )}
        </Stack>
    );
};

export default FileUpload;