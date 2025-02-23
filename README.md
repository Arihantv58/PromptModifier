# PromptModifier
A dual-interface project for AI prompt analysis and chatbot interactions, powered by Azure OpenAI. Includes a web-based chatbot and a CLI tool for prompt engineering experiments.

## Features

- 🌐 **Web Chatbot Interface**
  - Real-time chat with AI
  - Message history display
  - Responsive UI

- 💻 **CLI Prompt Engineering Tool**
  - Interactive prompt testing
  - Dynamic system/grounding context loading
  - Raw API response inspection

- 🔧 **Core Components**
  - Azure OpenAI integration
  - FastAPI backend
  - CORS-enabled API endpoints
  - Configurable context templates (`system.txt`, `grounding.txt`)

## Prerequisites

- Python 3.9+
- Node.js (for optional web server)
- Azure OpenAI credentials
- Basic understanding of REST APIs

## Installation

1. **Clone Repository**
   
        git clone https://github.com/Arihantv58/PromptModifier.git
        
        cd PromptAnalyzer

2. **Install Python Dependencies**

        pip install fastapi uvicorn python-dotenv openai
  
3. **Environment Setup**
   
      Create .env file with your Azure credentials:
    
        AZURE_OAI_ENDPOINT=<your-endpoint>
        
        AZURE_OAI_KEY=<your-key>
        
        AZURE_OAI_DEPLOYMENT=<deployment-name>

## Configuration

1. **Context Files**

      system.txt: Define AI's base personality/role
      
      grounding.txt: Add conversation context/constraints

2. **Project Structure**


    ├── app.py                     # FastAPI backend
    
    ├── prompt-engineering.py       # CLI testing tool
    
    ├── script.js                   # Frontend logic
    
    ├── index.html                  # Chat interface
    
    ├── styles.css                  # UI styling
    
    ├── system.txt                  # AI system prompt
    
    ├── grounding.txt               # Conversation context
    
    └── .env                        # Configuration secrets

##Usage

1. **Web Chat Interface**

        uvicorn app:app --reload
      
      #Open index.html in browser
      
        python -m http.server 3000  # Optional simple server

2. **CLI Prompt Engineering Tool**

        python prompt-engineering.py

## Customization

  Adjust AI Parameters: Modify temperature and max_tokens in both app.py and prompt-engineering.py
  
  Style Customization: Edit styles.css for visual changes
  
  API Configuration: Update .env file with different Azure credentials

## Contributing
  Contributions welcome! Please follow these steps:
  
  Fork the repository
  
  Create a feature branch
  
  Submit a pull request
