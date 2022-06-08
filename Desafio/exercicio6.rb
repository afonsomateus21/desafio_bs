puts "Digite de onde a contagem deve começar:"
numero = gets.to_i

print("\n")

while numero >= 0 do
  print "#{numero}\n"
  numero -= 1
  if numero == -1 
    print "KABUM\n"
  end
end