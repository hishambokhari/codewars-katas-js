#Basic Fizzbuzz in ruby:

# 1.upto(100) do |i|
#   if i % 3 && i % 5 == 0
#     puts "FizzBuzz"
#   elsif i % 3 == 0
#     puts "Fizz"
#   elsif i % 5 == 0
#     puts "Buzz"
#   else 
#     puts i
#   end
# end

# Hashed FizzBuzz in Ruby

def hashed_fizz_buzz num
  hash = Hash.new
  1.upto(num).each do |i|
    if (i%3==0) && (i %5==0)
      hash[i] = "FizzBuzz"
    elsif (i%3==0)
      hash[i] = "Fizz"
    elsif (i%5==0)
      hash[i] = "Buzz"
    else 
      hash[i] = i
    end
  end
  hash
end

puts(hashed_fizz_buzz(16))