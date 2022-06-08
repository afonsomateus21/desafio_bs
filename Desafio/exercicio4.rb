puts "Informe sua data de nascimento"
data = gets

lista = data.split('/')

somatorio = 0

for numero in lista do
  somatorio += numero.to_i
end

puts somatorio