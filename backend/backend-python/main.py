from fastapi import FastAPI
from pydantic import BaseModel
import ollama

app = FastAPI(title="AI Backend with Llama")

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def read_root():
    return {"status": "AI Backend is running!"}

@app.post("/chat")
def chat_with_llama(request: ChatRequest):
    # Llama 3.1 모델을 사용하여 응답 생성
    # 참고: ollama 프로그램이 백그라운드에 실행 중이고 llama3.1 모델이 설치되어 있어야 합니다.
    response = ollama.chat(model='llama3.1', messages=[
        {'role': 'user', 'content': request.message}
    ])
    
    return {"reply": response['message']['content']}
