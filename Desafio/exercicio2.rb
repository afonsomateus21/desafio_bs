puts "Informe o seu nome: "
nome = gets

tamanho = nome.split('').length - 1
nome_invertido = []

while tamanho >= 0 do
  nome_invertido.push(nome.split('')[tamanho])
  tamanho -= 1
end

puts "#{nome_invertido.join("")}"


