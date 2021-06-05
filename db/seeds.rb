require 'faker'

puts "Creating seed"

9.times do |i|
  Hobby.create(
    name: Faker::Music.genre,
    description: Faker::Restaurant.description,
    instruction: Faker::Food.description
  )
end

puts "Finished creating seeds"
