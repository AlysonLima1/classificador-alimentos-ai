from fastapi import FastAPI, File, UploadFile
from transformers import pipeline
from PIL import Image
import io

app = FastAPI()

classifier = pipeline("image-classification", model="google/vit-base-patch16-224")

# Base de decisão melhorada
ULTRAPROCESSADOS = [
    "pizza", "burger", "hotdog", "sandwich", "cake", "donut",
    "fries", "chips", "cola", "soda", "chocolate"
]

SAUDAVEIS = [
    "apple", "banana", "orange", "salad", "vegetable",
    "fruit", "broccoli", "carrot"
]

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes))

    results = classifier(image)

    label = results[0]['label'].lower()
    score = results[0]['score']

    # lógica melhorada
    if any(item in label for item in ULTRAPROCESSADOS):
        final = "Ultraprocessado"
    elif any(item in label for item in SAUDAVEIS):
        final = "Saudável"
    else:
        # fallback inteligente
        if score > 0.6:
            final = "Provavelmente saudável"
        else:
            final = "Indefinido"

    return {
        "prediction": final,
        "label": label,
        "confidence": round(score * 100, 2)
    }
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

