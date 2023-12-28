import {
  Button,
  FileInput,
  Label,
  ListGroup,
  Modal,
  Select,
} from "flowbite-react";
import { useState } from "react";

import { IconType } from "react-icons";
import { FaCloudDownloadAlt, FaPaperPlane } from "react-icons/fa";

interface Props {
  id: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  buttonLabel?: string;
  placeholder?: string;
  icon?: IconType;
  onClick?: () => void;
}

export const SelectButton: React.FC<Props> = (props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={props.id} value={props.label} />
      </div>
      <div className={"flex gap-1 items-center"}>
        <Select
          id={props.id}
          name={props.id}
          sizing={props.size}
          icon={props.icon}
          defaultValue={""}
        >
          <>
            <option value={""} disabled>
              Please select an option
            </option>
            <option>logo.png</option>
            <option>avatar.png</option>
            <option>background.png</option>
            <option>icon.png</option>
            <option>image.png</option>
            <option>picture.png</option>
          </>
        </Select>

        <Button size={props.size} onClick={() => setOpenModal(true)}>
          {props.buttonLabel}
        </Button>
      </div>

      <DropdownModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

interface DropdownModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const DropdownModal = (props: DropdownModalProps) => {
  const { openModal, setOpenModal } = props;

  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const selectedFiles: File[] = [];
    for (const file of files as FileList) {
      selectedFiles?.push(file);
    }
    setSelectedFiles(selectedFiles);
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Select a file</Modal.Header>
      <Modal.Body>
        {(selectedFiles && (
          <>
            <ListGroup>
              {selectedFiles.map((file, i) => (
                <ListGroup.Item
                  key={i}
                  icon={FaPaperPlane}
                  target="_blank"
                  href={URL.createObjectURL(file)}
                >
                  {file.name}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <br />
            <Button color="failure" onClick={() => setSelectedFiles(null)}>
              Clear selected
            </Button>
          </>
        )) || <Dropzone handleUpload={handleUpload} />}
      </Modal.Body>
    </Modal>
  );
};

const Dropzone = (props: { handleUpload: any }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Label
        htmlFor={"dropzone-file"}
        className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <div className="text-3xl">
            <FaCloudDownloadAlt />
          </div>
          <br />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <FileInput
          id="dropzone-file"
          name="dropzone-file"
          className="hidden invisible"
          accept="image/*"
          onChange={props.handleUpload}
        />
      </Label>
    </div>
  );
};
