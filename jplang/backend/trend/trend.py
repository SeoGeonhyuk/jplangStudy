import requests
from bs4 import BeautifulSoup

def get_google_search_results(query):
    # 구글 검색 URL 생성
    google_url = f"https://www.google.com/search?q={query}"
    
    # HTTP 요청 보내기
    response = requests.get(google_url)

    # 응답 내용을 파싱할 BeautifulSoup 객체 생성
    soup = BeautifulSoup(response.text, 'html.parser')

    # 검색 결과 개수를 가져오기
    result_stats = soup.find(id='main')
    
    # 결과가 존재하는지 확인 후 출력
    if result_stats:
        print("Google 검색 결과 개수:", result_stats.text)
    else:
        print("Google 검색 결과를 찾을 수 없습니다.")

# 검색어를 지정하여 함수 호출
get_google_search_results("秒")
