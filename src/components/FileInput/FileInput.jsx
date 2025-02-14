import styles from "./FileInput.module.scss";
import { assets } from "../../assets/assets";
import ErrorLine from "../ErrorLine/ErrorLine";
import { useState } from "react";

function FileInput({ setUploadedFile, err, setErr }) {
  const [successMsg, setSuccesMsg] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 500kb === 512,000bytes
    if (file.size > 512000) {
      setErr((prevState) => ({
        ...prevState,
        fileErr: "File Too Large , Please Upload a Photo Under 500kb",
      }));
    } else {
      setUploadedFile(file);
      setErr((prevState) => ({
        ...prevState,
        fileErr: null,
      }));
      setSuccesMsg("File Uploaded Successfully");
    }
  };
  const { icon_upload } = assets;
  return (
    <div className={styles.FileInputRow}>
      <p className={styles.label}>Upload Avatar</p>
      <input
        type="file"
        name="file"
        id="profile"
        accept="image/png, image/jpeg"
        className={styles.FileInput}
        onChange={handleFileChange}
      />
      <label htmlFor="profile" className={styles.FileInputButton}>
        <div className={styles.ImgContainer}>
          <img src={icon_upload} alt="" />
        </div>
        <p>Drag Or Drop Or Click To Upload</p>
      </label>
      <ErrorLine
        text={
          err
            ? err
            : successMsg
            ? successMsg
            : "Upload Photo (JPG or PNG , max-size: 500KB)."
        }
        color={err ? "red" : successMsg ? "green" : undefined}
        Icon={err || successMsg ? false : undefined}
      />
    </div>
  );
}

export default FileInput;
