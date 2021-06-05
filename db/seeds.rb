require 'faker'

puts "Creating seed"

9.times do |i|
  Hobby.create(
    name: Faker::ProgrammingLanguage.name,
    description: Faker::Restaurant.description,
    instruction: Faker::Food.description
  )
end

puts "Finished creating seeds"
