import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';

function PhotoUploader({ setImgfile, setImgSrc }) {
  // 사진 업로드 input 태그 접근
  const imageInput = useRef();

  // 사진 업로드 버튼 선택 시 input 태그 클릭
  const onCickImageUpload = () => {
    imageInput.current.click();
  };

  // 사진 미리보기 인코딩(base64)
  const onChangeFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    return new Promise((resolve) => {
      reader.onload = () => {
        // 실제 전송될 파일
        setImgfile(e.target.files[0]);
        //setImgName(e.target.files[0].name);
        // 미리보기 사진
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <div>
      <input
        type='file'
        accept='image/jpg, image/png, image/jpeg'
        style={{ display: 'none' }}
        ref={imageInput}
        onChange={onChangeFile}
      />
      <Button onClick={onCickImageUpload} width='40px' height='32px'>
        선택
      </Button>
    </div>
  );
}

export default PhotoUploader;
