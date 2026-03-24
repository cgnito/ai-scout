import os
from firecrawl import FirecrawlApp
from dotenv import load_dotenv

load_dotenv()

firecrawl_app = FirecrawlApp(api_key=os.getenv("FIRECRAWL_API_KEY"))

def get_briefing(target: str, topic: str = "recent updates"):
    """
    scrapes specifically for tactical intelligence:
    Icebreakers (wins), Landmines (bad news/bugs), and Signals (trends).
    """
    query = f"{target} {topic} latest news reviews challenges 2025 2026"
    
    try:
        response = firecrawl_app.search(query=query, limit=5)
        results = getattr(response, 'web', [])
        
        if not results:
            return "No specific recent data found. Suggest staying with general company fundamentals."
        
        #wrap the results in a clear structure
        intel_report = "--- START OF RESEARCH DATA ---\n"
        for item in results:
            intel_report += f"SOURCE: {item.title}\n"
            intel_report += f"INTEL: {item.description}\n\n"
        intel_report += "--- END OF RESEARCH DATA ---"
        
        return intel_report

    except Exception as e:
        return f"Research error: {str(e)}"