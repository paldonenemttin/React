# Context의 대표 개념

## MS-DOS 시절의 컴퓨팅 환경

- 한대의 컴퓨터에 한가지의 운영체제(MS-DOS)를 설치하고
- 스토리지에 사용하고자 하는 프로그램을 설치해두고
- hwp를 사용하여 문서를 작성한다
- 문서를 작성하다가 그림을 첨부하고 싶으면,
  작성중이던 hwp 파일을 저장하고
  hwp 파일 종료 후
- 그림판을 실행하여 필요한 그림을 작성하고
  완성된 그림을 그림 파일로 저장하고
  그림판을 종료하고
- 다시 hwp 파일을 실행하여 저장해둔 hwp 문서를 open하고
  저장해둔 그림을 불러와서 첨부해 완성했다

## 멀티환경의 운영체제(Window, Linux, Mac)을 사용하는 환경

- 동시에 hwp와 포토샵을 실행시켜 놓고 창을 마우스로 번갈아가며 Top로
  올려서 작업을 하고 필요한 부분을 Coqy&Post하여 작업을 완료한다
- 동시에 hwp와 포토샵이 운영체제에서 실행되는 상황을 컴퓨터 입장에서 생각하면
- 여러분이 언제 hqp를 마우스로 클릭할지, 언제 포토샵을 클릭할지 알수 없다
- 운영체제는 hwp를 클릭하면 hwp 관련 뎅터를 활성화하고, 포토샵을 클릭하면
  포토샵 관련 데이터를 활성화하는 일을 수시로 반복해야 한다.

- 운영체제마다 공통적으로 관리해야 할 데이터 묶음을 만들어두고 창이 뒤로 감춰지면
  그 부분을 임시로 저장해두고 창이 활성화되면 그 데이터 부분을 활성화하는 일을 수행한다

- 이때 운영체제가 공통적으로 관리 해야할 데이터묶음의 구조를 미리 만들어두는데
  이 데이터가 Context이다

## Context Swiching

- 한 운영체제에서 다수의 프로그램, 다수의 프로세서, 다수의 테스트 다수의 Thread가 실행되는 환경에서는 관리해야 할 데이터(메모리)가 무한대로 커질 수 있다
- 이러한 관리해야할 데이터를 Context라 부르고
- 각 프로그램 등이 활성화 또는 비활성화 될때 쉽게 바꿀 수 있는 알고리즘이 구현되어 있다.
- 이러한 일을 Context Swiching

## React에서의 Context

- 수없이 많은 개념을 갖는 Context 용어이지만 React에서는 state, setState() 함수를 쉽게 사용할 수 있는 개념으로 만들어놨다

1. state를 관리할 Context 컴포넌트를 선언하기
   crateContext() 함수를 사용하여 컴포넌트를 생성하고 export하기

2. App.js(state를 공류할 컴포넌트)를 Context로 감싸기
   생성한 Context 컴포넌트를 import하기
   제일 바깥쪽 컴포넌트에 Context.Provider를 사용하여 모든 컴포넌트 감싸기

3. state를 사용할 곳에서는
   생성한 Context 컴포넌트를 import 하기
   import한 Context 컴포넌트를 useContext() 함수에 매개변수로 전달하고
   사용할 state를 분해하기
