puts "Informe o seu nome: "
nome = gets

lista = nome.split('')

index = 0

for item in lista do
  if item != ' '
    index += 1
  end
end

puts "#{nome}", "#{index-1} caracteres"