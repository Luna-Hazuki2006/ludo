def lengthOfLastWord(s: str) -> int:
    lista = s.strip().split(' ')
    print(lista)
    print(len(lista[-1]))

lengthOfLastWord("luffy is still joyboy")

def plusOne(digits: list[int]) -> list[int]:
    print(str(digits).join())

plusOne([1,2,3])