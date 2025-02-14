import { useContext, useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import styles from "./Form.module.scss";
import FileInput from "../FileInput/FileInput";
import { AppContext } from "../../context/context";

function Form() {
  const { fetchGithubUsername, setUserData } = useContext(AppContext);
  const [err, setErr] = useState({});

  const [uploadedFile, setUploadedFile] = useState(null);
  const FullNameRef = useRef(null);
  const EmailRef = useRef(null);
  const UsernameRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr({});
    setUserData({});
    let isvalid = false;

    const fullName = FullNameRef.current.value.trim();
    const email = EmailRef.current.value.trim();
    const username = UsernameRef.current.value.trim();
    const userIsFound = await fetchGithubUsername(
      username,
      setErr,
      setUserData
    );
    if (uploadedFile === null) {
      setErr((p) => ({ ...p, fileErr: "No Image Selected." }));
      return;
    }
    if (fullName.length === 0) {
      setErr((p) => ({ ...p, nameErr: "Please Insert Your Name." }));
      return;
    }
    if (email.length === 0) {
      setErr((p) => ({ ...p, emailErr: "Please Insert Your Email." }));
      return;
    }
    if (!userIsFound) {
      setErr((prev) => ({ ...prev, githubErr: "User Is Not Found." }));
      return;
    } else {
      isvalid = true;
    }
    if (isvalid) {
      const img = URL.createObjectURL(uploadedFile);
      setUserData({
        username: username,
        name: fullName,
        email: email,
        photo: img,
        date: new Date(),
      });
    }
  };
  useEffect(() => {
    if (!uploadedFile) return;
    return () => {
      URL.revokeObjectURL(uploadedFile);
    };
  }, [uploadedFile]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FileInput
        setErr={setErr}
        setUploadedFile={setUploadedFile}
        err={err.fileErr}
      />
      <Input
        label={"Full Name"}
        type="text"
        placeholder={""}
        ref={FullNameRef}
        err={err.nameErr}
      />
      <Input
        label={"Email Adress"}
        type="email"
        placeholder={"example@email.com"}
        ref={EmailRef}
        err={err.emailErr}
      />
      <Input
        label={"Github Username"}
        type="text"
        placeholder={"@yourusername"}
        ref={UsernameRef}
        err={err.githubErr}
      />
      <div className={styles.submitInput}>
        <input type="submit" value="Generate My Ticket" />
      </div>
    </form>
  );
}

export default Form;
