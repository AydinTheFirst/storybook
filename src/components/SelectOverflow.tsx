import { Button, FileInput, Label, ListGroup, Modal } from "flowbite-react";
import { useState } from "react";

import { IconType } from "react-icons";
import { FaAngleDown, FaCloudDownloadAlt, FaPaperPlane } from "react-icons/fa";

import "./SelectOverflow.css";
import { Input } from "./Input";
import { baseClass, buttonTheme, textInputTheme } from "../contants";
import { ClearButton } from "./ClearButton";

interface Props {
  id: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  buttonLabel?: string;
  placeholder?: string;
  icon?: IconType;
  onClick?: () => void;
}

const optionlist = [
  "avatar.png",
  "background.png",
  "icon.png",
  "image.png",
  "picture.png",
  "picture.png",
  "picture.png",
  "picture.png",
  "picture.png",
];

export const SelectOverflow: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [options, setOptions] = useState<string[]>(optionlist);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleClick = (e: string) => {
    setValue(e);
    setVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const filteredOptions = optionlist.filter((option) =>
      option.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setOptions(filteredOptions);
  };

  const handleOpen = () => {
    setOpenModal(true);
    setVisible(false);
  };

  const handleDelete = () => {
    setValue("");
    setOptions(optionlist);
  };
  return (
    <>
      <div className="mb-2 block">
        <Label htmlFor={props.id} value={"label"} />
      </div>
      <div className="flex gap-1 items-center">
        <div className="relative">
          <div className={baseClass}>
            <Input
              type="text"
              theme={textInputTheme}
              value={value}
              placeholder="Search"
              className="mb-1"
              onFocus={() => setVisible(true)}
              onChange={handleChange}
            />

            <div className="absolute right-0">
              {(value.length > 0 && <ClearButton onClick={handleDelete} />) || (
                <AngleDownBtn onClick={() => setVisible(!visible)} />
              )}
            </div>
          </div>

          {visible && (
            <ListGroup
              className="absolute w-full overflow-auto z-50"
              style={{ maxHeight: "10rem" }}
            >
              {(options.length > 0 &&
                options.map((option, i) => (
                  <ListGroup.Item key={i} onClick={() => handleClick(option)}>
                    {option}
                  </ListGroup.Item>
                ))) || <ListGroup.Item>No Result</ListGroup.Item>}
            </ListGroup>
          )}
        </div>

        <Button onClick={() => alert(value)}>Submit</Button>
      </div>

      <div>
        <br />
        <Button onClick={handleOpen}>Add new record</Button>
      </div>

      <DropdownModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setValue={setValue}
      />
    </>
  );
};

const AngleDownBtn = (props: { onClick: () => void }) => {
  return (
    <Button {...props} color="default" theme={buttonTheme} title="Clear">
      <FaAngleDown />
      <span className="sr-only">Close</span>
    </Button>
  );
};

interface DropdownModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  setValue: (value: string) => void;
}

const DropdownModal = (props: DropdownModalProps) => {
  const { openModal, setOpenModal, setValue } = props;

  const [selectedFiles, setSelectedFiles] = useState<File[] | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const selectedFiles: File[] = [];
    for (const file of files as FileList) {
      selectedFiles?.push(file);
    }
    setSelectedFiles(selectedFiles);
    setValue(selectedFiles?.map((file) => file.name).join(", ") || "");
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

            <div className="flex gap-5">
              <Button color="failure" onClick={() => setSelectedFiles(null)}>
                Clear selected
              </Button>
              <Button onClick={() => setOpenModal(false)}>Done</Button>
            </div>
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
        <div className="flex flex-col items-center justify-center pb-6 pt-5 mb-5">
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
