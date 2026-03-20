import os
from firecrawl import FirecrawlApp
from dotenv import load_dotenv

load_dotenv()

firecrawl_app = FirecrawlApp(api_key=os.getenv("FIRECRAWL_API_KEY"))

def get_briefing(target: str, topic: str):
    """
    worker func 
    input: a name (target) and a subject (topic).
    Output: a clean string of text.
    """
    query = f"{target} {topic} news 2026"
    
    try:
        response = firecrawl_app.search(query=query, limit=3)
        results = getattr(response, 'web', [])
        
        if not results:
            return "No recent news found."
        
        report = ""
        for item in results:
            report += f"Headline: {item.title}\nSummary: {item.description}\n\n"
        
        return report

    except Exception as e:
        return f"Research error: {str(e)}"