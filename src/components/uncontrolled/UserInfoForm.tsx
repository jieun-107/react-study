import React, { useRef } from "react";

export default function UserInfoForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get("name");
      const email = formData.get("email");
      const gender = formData.get("gender"); // radio는 하나만 선택하기 때문에 get
      const skills = formData.getAll("skills"); // checkbox는 여러개 요소 선택 가능하기 때문에 getAll
      const bio = formData.get("bio");

      if(name === ""){
        alert("이름을 입력해주세요.");
        nameRef.current?.focus();
      }
      console.log({name, email, gender, skills, bio});

    }
  }
  return (
    <div className="user-info">
      <h1 className="user-info__title">User Information</h1>
      <form className="user-info__form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-group__label" htmlFor="name">
            이름:
          </label>
          <input className="form-group__input" type="text" id="name" name="name" ref={nameRef} />
        </div>

        <div className="form-group">
          <label className="form-group__label" htmlFor="email">
            이메일:
          </label>
          <input className="form-group__input" type="email" id="email" name="email" />
        </div>

        <div className="form-group form-group--radio">
          <label className="form-group__label">성별:</label>
          <label className="form-group__radio">
            <input type="radio" id="male" value="남성" name="gender" />
            남성
          </label>
          <label className="form-group__radio">
            <input type="radio" id="female" value="여성" name="gender" />
            여성
          </label>
        </div>

        <div className="form-group form-group--checkbox">
          <label className="form-group__label">기술 관심:</label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="JavaScript" name="skills" />
            JavaScript
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="React" name="skills" />
            React
          </label>
          <label className="form-group__checkbox">
            <input type="checkbox" value="Node.js" name="skills" />
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
            name="bio"
          ></textarea>
        </div>

        <button className="user-info__submit" type="submit">
          제출
        </button>
      </form>
    </div>
  );
}
