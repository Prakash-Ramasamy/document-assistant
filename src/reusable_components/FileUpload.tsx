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
}

const FancyFileUpload: React.FC<FileUploadProps> = ({
    label = "Choose your file", // Default label text
    onFileUpload,
}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);

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

    const stackTokens: IStackTokens = { childrenGap: 10 };

    return (
        <Stack styles={containerStyles} tokens={stackTokens}>
            <Label htmlFor="file-upload" styles={{ root: { fontWeight: "600" } }}>
                {label}
            </Label>

            <Stack
                style={{ height: "134px" }}
                horizontalAlign="center"
                verticalAlign="center"
                styles={uploadBoxStyles}
                tokens={stackTokens}
            >
                {/* <Icon
                    iconName="CloudUpload"
                    styles={{ root: { fontSize: 48, color: "#0078d4" } }}
                /> */}
                <Text variant="large">Drag and drop your file here</Text>
                <Text variant="smallPlus" styles={{ root: { color: "#6a6a6a" } }}>
                    or click to select a file
                </Text>
                <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    style={{
                        opacity: 0,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                    }}
                />

                {selectedFile ? (
                    <Text variant="small" styles={{ root: { color: "#333" } }}>
                        Selected File: {selectedFile.name}
                    </Text>
                ) : (
                    <Text variant="small" styles={{ root: { color: "#888" } }}>
                        No file selected
                    </Text>
                )}
            </Stack>
        </Stack>
    );
};

export default FancyFileUpload;
