## 🚀 프로젝트 실행 방법

### 1. 의존성 설치

```bash
pip install -r requirements.txt
```

> `Django`, `channels`, `daphne`, `Pillow` 등이 설치됩니다.

---

### 2. 데이터베이스 구조 동기화

```bash
python manage.py makemigrations
python manage.py migrate
```

> 모델 변경사항을 반영해 DB 스키마를 생성합니다.

---

### 3. 장고 개발 서버 실행 (정적 파일/일반 요청)

```bash
python manage.py runserver
```

> 기본적으로 8000번 포트에서 실행되며, 정적 파일 및 일반 페이지 요청을 처리합니다.

---

### 4. Daphne ASGI 서버 실행 (웹소켓 전용)

```bash
daphne -p 8001 Givetime.asgi:application
```

> 실시간 채팅 등 **웹소켓 기능**은 `daphne` 서버를 통해 처리됩니다.  
> 프론트엔드에서는 `ws://localhost:8001/...` 주소로 연결됩니다.

---

### 📌 추가 팁

- `.env` 또는 `settings.py`에서 `ALLOWED_HOSTS`, `DEBUG` 등의 설정도 확인해 주세요.
- 웹소켓 연결을 테스트하려면 브라우저 콘솔 또는 개발자 도구의 네트워크 탭을 확인하세요.
- Django admin을 사용하려면 슈퍼유저를 생성하세요:

```bash
python manage.py createsuperuser
```
