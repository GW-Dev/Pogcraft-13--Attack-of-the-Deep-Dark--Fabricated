// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.tags('item', event => {
	// Misc tag stuff

	event.add('minecraft:coals', 'modern_industrialization:lignite_coal')
	event.add('c:workbench', 'minecraft:crafting_table')
	event.add('c:cooked_eggs', 'additionaladditions:fried_egg')
	event.remove('twilightforest:portal_activators', '#c:diamonds')
	event.add('twilightforest:portal_activators', 'miskatonicmysteries:incantation_yog')

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

	event.add('c:desh_nuggets', 'modern_industrialization:desh_nugget')
	event.add('c:desh_ingots', 'modern_industrialization:desh_ingot')
	event.add('ad_astra_platform:desh_ingots', 'modern_industrialization:desh_ingot')
	event.add('c:desh_blocks', 'modern_industrialization:desh_block')
	event.add('ad_astra_platform:desh_blocks', 'modern_industrialization:desh_block')
	event.add('c:desh_dusts', 'modern_industrialization:desh_dust')
	event.add('c:desh_gears', 'modern_industrialization:desh_gear')
	event.add('c:desh_plates', 'modern_industrialization:desh_plate')
	event.add('c:desh_tiny_dusts', 'modern_industrialization:desh_tiny_dust')

	event.add('c:ostrum_nuggets', 'modern_industrialization:ostrum_nugget')
	event.add('c:ostrum_ingots', 'modern_industrialization:ostrum_ingot')
	event.add('ad_astra_platform:ostrum_ingots', 'modern_industrialization:ostrum_ingot')
	event.add('c:ostrum_blocks', 'modern_industrialization:ostrum_block')
	event.add('ad_astra_platform:ostrum_blocks', 'modern_industrialization:ostrum_block')
	event.add('c:ostrum_dusts', 'modern_industrialization:ostrum_dust')
	event.add('c:ostrum_gears', 'modern_industrialization:ostrum_gear')
	event.add('c:ostrum_plates', 'modern_industrialization:ostrum_plate')
	event.add('c:ostrum_tiny_dusts', 'modern_industrialization:ostrum_tiny_dust')

	event.add('c:calorite_nuggets', 'modern_industrialization:calorite_nugget')
	event.add('c:calorite_ingots', 'modern_industrialization:calorite_ingot')
	event.add('ad_astra_platform:calorite_ingots', 'modern_industrialization:calorite_ingot')
	event.add('c:calorite_blocks', 'modern_industrialization:calorite_block')
	event.add('ad_astra_platform:calorite_blocks', 'modern_industrialization:calorite_block')
	event.add('c:calorite_dusts', 'modern_industrialization:calorite_dust')
	event.add('c:calorite_gears', 'modern_industrialization:calorite_gear')
	event.add('c:calorite_plates', 'modern_industrialization:calorite_plate')
	event.add('c:calorite_tiny_dusts', 'modern_industrialization:calorite_tiny_dust')
	
})