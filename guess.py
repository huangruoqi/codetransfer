from guesslang.guess import Guess
guess = Guess()

language = guess.language_name("""
    object Main {
        def main(args: Array[String]) {
            val res = for (a <- args) yield a.toUpperCase
            println("Arguments: " + res.toString)
        }
    }
""")

print(language)
