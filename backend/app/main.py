from fastapi import FastAPI
from app.api.routes import router as api_router

app = FastAPI(title="The AI Scout Backend")

app.include_router(api_router, prefix="/agent")

@app.get("/")
async def health_check():
    return {"status": "The Scout is online"}