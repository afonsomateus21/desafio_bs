puts "Digite o DDD procurado"
ddd = gets.to_i

case ddd
  when 61
    puts "Brasília"
  when 71
    puts "Salvador"
  when 11
    puts "São Paulo"
  when 21
    puts "Rio de Janeiro"
  when 32
    puts "Juiz de Fora"
  when 19
    puts "Campinas"
  else
    puts "DDD não encontrado"
end
