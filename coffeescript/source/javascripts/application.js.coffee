#= require_tree ./vendor
#= require_tree ./lib

message = "Ready for some coffeescript ?!"

# alert(message)

coffee = (x = "w00000t") ->
  answer = confirm x
  "you answer is #{answer}"

# coffee()

$('.drink li').hover(
  ->
  $(@).find('span').show()
  ->
  $(@).find('span').hide()
)

storeLocations = ['Montreal', 'Ottawa', 'Toronto', 'Vancover', 'Calgary']

canadaEast = (location for location in storeLocations when location isnt 'Vancover')

# console.log(canadaEast)


# for location in storeLocations
#   console.log (location)

# List comprehenssions
# console.log (location) for location in storeLocations
# for loc in storeLocations
#   console.log ("#{loc}, Canada")

x = ("#{loc}, Canada" for loc in storeLocations when loc isnt 'Ottawa')

# console.log(x)

# using a filter
# for loc in storeLocations when loc isnt 'Ottawa'
#   console.log ("#{loc}, Canada")

#Splats
searchLocations = (brand, cities...) ->
  console.log "looking for #{brand} in #{cities.join(', ')}"

# searchLocations 'Starbucks', 'Montreal', 'Toronto'

# Objects
coffees =
  french:
    strength: 1
    in_stoke: 20
  italian:
    strength: 2
    in_stoke: 12
  decafe:
    strength: 0
    in_stoke: 0

# when dealing with objects 'of' is used instead of 'in' which used with arrays
# console.log "#{coffee} has #{attrs.in_stoke}" for coffee, attrs of coffees

# or you can write it like this
# for coffee, attrs of coffees
#   console.log "#{coffee} has #{attrs.in_stoke}"

# using filters
to_print = for coffee, attrs of coffees when attrs.in_stoke > 0
  "#{coffee} has #{attrs.in_stoke}"

# console.log to_print

# why use join? add all array elements into one string joining them with any slected character(s)
# console.log to_print.join " & "


# $.ajax
#   url: '/coffeeList'
#   method: 'GET'
#   success: (results) ->
#     i = null
#     coffee = null
#     $('ul.drink').append("<li> #{coffee.name} </li>") for coffee in results when coffee.level > 3
#   error: (results) ->
#     alert("failure #{results}")


# Object Orientation
coffee =
  name: 'French'
  strength: 1
  brew: ->
    console.log "brewing #{@name}"
  pour: (amount=1) ->
    if amount is 1
      console.log "Poured a sigle cup"
    else
      console.log "Poured #{amount} cups"

# convert coffee object to class
class Coffee
  constractor: (@name, @strength=1) ->
    # @name = name
    # @strength = strength or 1
  brew: ->
    console.log "brewing #{@name}, which strength is #{@strength}"
  pour: (amount=1) ->
    if amount is 1
      console.log "Poured a sigle cup"
    else
      console.log "Poured #{amount} cups"

# french = new Coffee("French", 5)
# french.brew()
# french.pour(5)

# Class inheritance
class VanHoutte extends Coffee
  constractor: (@name, @strength=0) ->

# test = new VanHoutte('canadian', 8)
# test.brew()
# test.pour(2)