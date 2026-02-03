import { useState } from "react";

export default function UserInfoForm() {
  //   - `name`: 사용자의 이름을 관리하는 변수
  // - `email`: 사용자의 이메일을 관리하는 변수
  // - `gender`: 사용자의 성별을 관리하는 변수
  // - `skills`: 사용자가 관심 있는 기술을 관리하는 배열 변수
  // - `bio`: 사용자의 자기소개를 관리하는 변수
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([
    { value: "JavaScript", item: false },
    { value: "React", item: false },
    { value: "Node.js", item: false },
  ]);
  const [bio, setBio] = useState("");

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.value === value ? { ...skill, item: e.target.checked } : skill
      )
    );
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(formState);
    console.log(gender);
    console.log(skills);
    console.log(bio);
  }

  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form">
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input
            className="form-group__input"
            type="text"
            id="name"
            value={formState.name}
            onChange={handleFormStateChange}
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
            value={formState.email}
            onChange={handleFormStateChange}
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
              onChange={handleGenderChange}
              checked={gender === "남성"}
            />
            남성
          </label>
          <label className="form-group__radio">
            <input
              type="radio"
              id="female"
              name="gender"
              value="여성"
              onChange={handleGenderChange}
              checked={gender === "여성"}
            />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value={skills[0].value}
              name="item"
              id="item1"
              checked={skills[0].item}
              onChange={handleSkillsChange}
            />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value={skills[1].value}
              name="item"
              id="item2"
              checked={skills[1].item}
              onChange={handleSkillsChange}
            />
            React
          </label>
          <label className="form-group__checkbox">
            <input
              type="checkbox"
              value={skills[2].value}
              name="item"
              id="item3"
              checked={skills[2].item}
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
            onChange={(e) => handleBioChange(e)}
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit" onClick={handleSubmit}>
          제출
        </button>
      </form>

      <div className="preview">
        <h2 className="preview__title">실시간 입력값</h2>
        <p className="preview__item">이름: {formState.name}</p>
        <p className="preview__item">이메일: {formState.email}</p>
        <p className="preview__item">성별: {gender}</p>
        <p className="preview__item">
          기술 관심:
          {skills
            .filter((element) => element.item === true)
            .map((element) => {
              return element.value;
            })}
        </p>
        <p className="preview__item">자기소개: {bio}</p>
      </div>
    </div>
  );
}
