# 🧴 Classificador de Alimentos AI

## 📌 Descrição

O **Classificador de Alimentos AI** é uma aplicação web que utiliza **visão computacional** para analisar imagens de alimentos e classificá-los como:

- ✅ Saudável  
- ⚠️ Ultraprocessado  

A aplicação utiliza um modelo de inteligência artificial pré-treinado do Hugging Face para realizar inferência em imagens enviadas pelo usuário.

---

## 🎯 Objetivo

O objetivo do projeto é demonstrar, de forma prática, o uso de **visão computacional aplicada a um caso real**, simulando sistemas utilizados em aplicativos de nutrição e saúde.

---

## 🧠 Tipo de IA Utilizada

- 📷 Classificação de Imagem
- 🤖 Modelo: `google/vit-base-patch16-224`
- 📚 Biblioteca: Hugging Face Transformers

---

## ⚙️ Tecnologias Utilizadas

### 🔹 Backend
- Python
- FastAPI
- Transformers (Hugging Face)
- Torch
- Pillow

### 🔹 Frontend
- React
- JavaScript
- HTML/CSS

---

## 🧩 Estrutura do Projeto
classificador-alimentos-ai/
│
├── backend/
│ ├── main.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── pages/
│ │ ├── Home.jsx
│ │ ├── Upload.jsx
│ │ └── Result.jsx
│ │
│ ├── index.html
│ └── package.json
│
└── README.md

---

## 📱 Funcionalidades

- Upload de imagem de alimento
- Processamento com IA
- Classificação automática
- Exibição de resultado com confiança

---

## 🖥️ Telas da Aplicação

### 🏠 Home
- Apresentação do sistema
- Botão para iniciar

### 📤 Upload
- Envio de imagem

### 📊 Resultado
- Exibição da classificação
- Porcentagem de confiança

---

## 🔁 Fluxo da Aplicação

1. Usuário acessa a tela inicial  
2. Envia uma imagem de alimento  
3. O backend processa a imagem  
4. A IA classifica o alimento  
5. O resultado é exibido na tela  

---

## 🧠 Lógica da Classificação

Após a inferência do modelo, o sistema aplica regras para determinar o resultado final:

- Alimentos como pizza, hambúrguer e refrigerante → **Ultraprocessado**
- Frutas e vegetais → **Saudável**
- Outros casos → classificação baseada na confiança do modelo

---

## ⚙️ Como Executar o Projeto

### 🔹 1. Clonar o repositório
git clone https://github.com/AlysonLima1/classificador-alimentos-ai.git

cd classificador-alimentos-ai
---

### 🔹 2. Backend
cd backend

python -m venv venv

Windows

venv\Scripts\activate

Linux/Mac

source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload

Servidor rodando em:

---

### 🔹 3. Frontend
cd frontend

npm install
npm run dev


Acesse no navegador:
[text](http://localhost:5173)
