// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {
	// Misc tag stuff

	event.add('minecraft:coals', 'modern_industrialization:lignite_coal')
	event.add('c:workbench', 'minecraft:crafting_table')
	event.add('c:cooked_eggs', 'additionaladditions:fried_egg')
	event.remove('twilightforest:portal/activator', '#c:gems/diamond')
	event.add('twilightforest:portal/activator', 'miskatonicmysteries:incantation_yog')

	//Farmer's Delight axe tag work
	event.add('fabric:tools/axes', 'additionaladditions:rose_gold_axe')
	event.add('fabric:tools/axes', 'additionaladditions:gilded_netherite_axe')
	event.add('fabric:tools/axes', 'modern_industrialization:diesel_chainsaw')
	event.add('fabric:tools/axes', 'spectrum:multitool')
	event.add('fabric:tools/axes', 'spectrum:bedrock_axe')
	event.add('fabric:tools/axes', 'ae2:certus_quartz_axe')
	event.add('fabric:tools/axes', 'ae2:nether_quartz_axe')
	
	// Ad Astra! pruning
	event.add('c:raw_silver_ores', 'bewitchment:raw_silver')
	event.remove('c:steel_ingots', 'ad_astra:steel_ingot')
	event.remove('c:steel_nuggets', 'ad_astra:steel_nugget')
	event.remove('c:steel_blocks', 'ad_astra:steel_block')
	event.remove('c:steel_plates', 'ad_astra:steel_plate')
	event.remove('c:iron_plates', 'ad_astra:iron_plate')
	event.remove('c:iron_rods', 'ad_astra:iron_rod')
	event.add('c:iron_rods', 'modern_industrialization:iron_rod')
	
})