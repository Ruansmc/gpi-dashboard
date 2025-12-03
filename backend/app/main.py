# app/main.py
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

from app.routers import ideias as ideias_router


def create_app() -> FastAPI:
    app = FastAPI(
        title="Sistema Vcenter x CMDB",
        description="Dashboard de integração Vcenter com CMDB",
        version="1.0.0"
    )

    # ----------------------------------------
    # CORS
    # ----------------------------------------
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ----------------------------------------
    # Assets: static e templates
    # (📌 ajustado para apontar para frontend/static)
    # ----------------------------------------
    app.mount("/static", StaticFiles(directory="frontend/static"), name="static")
    templates = Jinja2Templates(directory="templates")

    # ----------------------------------------
    # Rotas de páginas HTML
    # ----------------------------------------
    @app.get("/")
    @app.get("/dashboard")
    def dashboard(request: Request):
        return templates.TemplateResponse("dashboard.html", {"request": request})

    @app.get("/metricas")
    def metricas(request: Request):
        return templates.TemplateResponse("metricas.html", {"request": request})

    @app.get("/vcenter")
    def vcenter(request: Request):
        return templates.TemplateResponse("vcenter.html", {"request": request})

    @app.get("/cmdb")
    def cmdb(request: Request):
        return templates.TemplateResponse("cmdb.html", {"request": request})

    @app.get("/ideias")
    def ideias_page(request: Request):
        return templates.TemplateResponse("ideias.html", {"request": request})

    # ----------------------------------------
    # Routers (API REST)
    # ----------------------------------------
    app.include_router(ideias_router.router, prefix="/api", tags=["Ideias"])

    return app


app = create_app()
