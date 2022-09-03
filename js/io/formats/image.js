new ModelFormat('image', {
	icon: 'image',
	show_on_start_screen: false,
	show_in_new_list: true,
	can_convert_to: false,
	model_identifier: false,
	animated_textures: true,
	edit_mode: false,
	new() {
		if (newProject(this)) {
			TextureGenerator.addBitmapDialog();
			return true;
		}
	},
	onActivation() {
		Interface.preview.style.display = 'none';
		UVEditor.vue.hidden = false;
		Interface.center_screen.append(document.getElementById('UVEditor'))
	},
	onDeactivation() {
		Interface.preview.style.display = null;
		Panels.uv.node.append(document.getElementById('UVEditor'))
	}
})
