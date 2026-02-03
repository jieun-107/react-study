import { useState } from "react";

export default function UserInfoForm2() {
  const [name, setName] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [gender, setGender] = useState("");
  const handleGengerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const [skills, setSkills] = useState<string[]>([]);
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSkills((skills) =>
      e.target.checked
        ? [...skills, value]
        : skills.filter((skill) => skill !== value),
    );
  };

  const [bio, setBio] = useState("");
  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("폼 제출 : ", {name, email, gender, skills, bio});
  }

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input
            className="form-group__input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="male"
              name="gender"
              value="남성"
              checked={gender === "남성"}
              onChange={handleGengerChange}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              name="gender"
              value="여성"
              checked={gender === "여성"}
              onChange={handleGengerChange}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="JavaScript"
              checked={skills.includes("JavaScript")}
              onChange={handleSkillsChange}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="React"
              checked={skills.includes("React")}
              onChange={handleSkillsChange}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value="Node.js"
              checked={skills.includes("Node.js")}
              onChange={handleSkillsChange}
            />
            Node.js
          </label>
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="bio">
            자기소개:
          </label>
          <textarea
            className="form-group__textarea"
            id="bio"
            placeholder="자기소개를 작성해주세요"
            value={bio}
            onChange={handleBioChange}
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {name}</p>
        <p className="preview__item">이메일: {email}</p>
        <p className="preview__item">성별: {gender}</p>
        <p className="preview__item">기술 관심: {skills.join(", ")}</p>
        <p className="preview__item">자기소개: </p>
        <pre>{bio}</pre>
      </div>
    </div>
  );
}
