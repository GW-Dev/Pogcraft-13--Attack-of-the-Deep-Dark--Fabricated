// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	//Alchemistry changes for MI to work
	
	event.replaceInput({id: 'alchemistry:dissolver'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:combiner'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:liquifier'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:atomizer'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:compactor'}, 'minecraft:redstone', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:reactor_casing'}, 'minecraft:blaze_powder', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fission_core'}, 'minecraft:blaze_rod', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fission_core'}, 'chemlib:yttrium_ingot', 'modern_industrialization:yttrium_dust')
	event.replaceInput({id: 'alchemistry:fusion_core'}, 'minecraft:netherite_scrap', 'modern_industrialization:advanced_upgrade')
	event.replaceInput({id: 'alchemistry:fusion_core'}, 'chemlib:tungsten_ingot', 'modern_industrialization:tungsten_ingot')
	event.remove({id: 'alchemistry:compactor/platinum_dust'})
	event.remove({id: 'alchemistry:compactor/tungsten_dust'})
	event.remove({id: 'alchemistry:compactor/aluminum_dust'})
	event.remove({id: 'alchemistry:compactor/titanium_dust'})
	event.remove({id: 'alchemistry:compactor/chromium_dust'})
	event.remove({id: 'alchemistry:compactor/manganese_dust'})
	

})