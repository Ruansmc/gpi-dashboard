from fastapi import APIRouter

router = APIRouter(prefix="/ideias", tags=["Ideias"])

ideias_db = []

@router.post("/")
def criar_ideia(analista: str, texto: str):
    ideias_db.append({"analista": analista, "texto": texto})
    return {"status": "OK", "mensagem": "Ideia cadastrada!"}

@router.get("/")
def listar():
    return ideias_db
