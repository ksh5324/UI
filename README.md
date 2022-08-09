# DGSW UI (CNS)

## 제작 동기

현재 저희 팀에서 사용하는 ui는 대부분 비슷한 ui로 가고 있으며, 대부분의 페이지에서 재사용되는 코드입니다.
또한 저희 팀에 현재 아키텍처는 한 디렉토리에 ui와 logic을 모두 관리하고 있습니다. 그러다 보니 상당히 많은 파일이 등장할 수 밖에 없는 상황입니다. 다시 말해 ui와 로직을 함께 관리하기에 상당한 시간이 소요되기 마련입니다. 비슷한 ui인데도 불과하고, 여러 파일을 수정해야하는 번거러움 또한 가져가야 했습니다. 그렇기에 ui와 logic이 따로 관리되면 유지보수 및 가독성에 큰 효과를 보일 것이라 생각했기에 제작하게 되었습니다.

## 사용된 기술

- 번들러: rollup
- 패키지 툴: yarn
- 컴파일: babel
- 언어: typescript, javascript, markdown, mdx
- 프레임워크: react, storybook
- 스타일링: css, styled-components

## 설치

npm i @ksh5324/cnsui  
yarn add @ksh5324/cnsui

https://www.npmjs.com/package/@ksh5324/cnsui

## docs

https://62efecd1d7a33abd903ac013-zbtbhxmkec.chromatic.com/?path=/story/example-introduction--page

## 적용

```jsx
const Card = memo(
  ({ type, title, description, tag, good, children, checked, score }) => {
    return (
      <>
        {type === "confirm" || type === "check" ? (
          <div className={type}>
            <h2 className={`${type}__title`}>{title}</h2>
            {type === "check" && checked && (
              <div className={`${type}__check`}>
                <img src={CheckSvg} />
              </div>
            )}
            <p className={`${type}__description`}>{description}</p>
            <ul className={`${type}__tagsGood`}>
              {tag.map((v) => (
                <li className={`${type}__tag`} key={v}>
                  {v}
                </li>
              ))}
              <li className={`${type}__good`}>
                {good} <img src={HeartSvg} />
              </li>
            </ul>
            {type === "confirm" && (
              <div className={`${type}__child`}>{children}</div>
            )}
          </div>
        ) : type === "star" ? (
          <div className={type}>
            <div className={`${type}__container`}>
              {[1, 2, 3, 4, 5].map((v) =>
                score >= v ? <img src={StarSvg} /> : <img src={NotStarSvg} />
              )}
            </div>
            <div className={`${type}__description`}>{description}</div>
          </div>
        ) : (
          <div>error</div>
        )}
      </>
    );
  }
);
```

```css
/* confirm */
.confirm {
  width: 198px;
  height: 162px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
}
.confirm__title {
  padding-top: 24px;
  margin-left: 16px;
  font-size: 11px;
  color: #434343;
}
.confirm__description {
  color: #636363;
  font-size: 11px;
  width: 166px;
  height: 39px;
  margin: 0 auto;
  margin-top: 8px;
  word-break: break-all;
  overflow: scroll;
}
.confirm__tagsGood {
  padding: 0;
  width: 166px;
  height: 12px;
  margin: 0 auto;
  position: relative;
}
.confirm__tag {
  display: inline;
  font-size: 10px;
  color: #939393;
  margin-right: 8px;
}
.confirm__child {
  display: flex;
  position: absolute;
  right: 15px;
  bottom: 24px;
  gap: 8px;
}
.confirm__good {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 8px;
  list-style: none;
  color: #939393;
}

/* check */
.check {
  width: 220px;
  height: 130px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
}
.check__title {
  font-size: 11px;
  padding-top: 24px;
  margin-left: 24px;
}
.check__description {
  width: 168px;
  height: 38px;
  color: #636363;
  font-size: 11px;
  margin: 0 auto;
  margin-top: 8px;
  word-break: break-all;
  overflow: scroll;
}
.check__tagsGood {
  padding: 0;
  margin-top: 8px;
  width: 166px;
  height: 12px;
  margin: 0 auto;
  position: relative;
}
.check__tag {
  display: inline;
  font-size: 10px;
  color: #939393;
  margin-right: 8px;
}
.check__good {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 8px;
  list-style: none;
  color: #939393;

  display: flex;
  align-items: center;
  gap: 4px;
}
.check__check {
  position: absolute;
  right: 24px;
  top: 24px;
  font-size: 11px;
}

/* star */
.star {
  width: 212px;
  height: 72px;
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: relative;
}
.star__container {
  width: 58px;
  height: 9.17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin-left: 20px;
}
.star__description {
  margin-top: 9.83px;
  margin-left: 20px;
}
```

이와 같이 긴코드를 라이브러를 적용시키면 다음과 같이 된다.

```jsx
<Item tag={["#tag", "#tag"]} title="title" type="confirm">
  <React.Fragment key=".0">
    <Button
      color="error"
      onClick={function noRefCheck() {}}
      rounded
      size="small"
      title="error"
      variant="outlined"
    />
    <Button
      color="success"
      onClick={function noRefCheck() {}}
      rounded
      size="small"
      title="check"
      variant="outlined"
    />
  </React.Fragment>
</Item>
```
