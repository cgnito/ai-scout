from fastapi import APIRouter
from pydantic import BaseModel
from api.services.researcher import get_briefing

router = APIRouter()

class ScoutRequest(BaseModel):
    target: str
    topic: str = "general updates"

@router.post("/search")
async def handle_search(data: ScoutRequest):
    result_text = get_briefing(data.target, data.topic)
    
    return {"results": result_text}