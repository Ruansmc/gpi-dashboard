# app/routers/ideias.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/ideias", tags=["Ideias"])

class Idea(BaseModel):
    analista: str
    texto: str

ideias_db: List[Idea] = []

@router.post("/", status_code=201)
def criar_ideia(idea: Idea):
    ideias_db.append(idea)
    return {"status": "OK", "mensagem": "Ideia cadastrada!", "idea": idea}

@router.get("/", response_model=List[Idea])
def listar():
    return ideias_db
