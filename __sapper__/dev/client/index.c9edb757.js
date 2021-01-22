import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.49d8356a.js';

var splash = "/client/f77b2cd6e6ab9e5f.svg";

/* src/routes/index.svelte generated by Svelte v3.31.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div0;
	let section0;
	let h20;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let section1;
	let h21;
	let t5;
	let t6;
	let div1;

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			section0 = element("section");
			h20 = element("h2");
			t1 = text("Nate Currit");
			t2 = space();
			p = element("p");
			t3 = text("I am a University professor and geospatial data scientist.\n            My research and teaching interests are in GIScience, with \n            special emphasis on Earth Observation analysis, spatial\n            databases and human-environment interaction. If there is\n            a way to do things with open source tools and data, I\n            choose to use it.");
			t4 = space();
			section1 = element("section");
			h21 = element("h2");
			t5 = text("Other stuff, like an image");
			t6 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-6s0mye\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			section0 = claim_element(div0_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			h20 = claim_element(section0_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Nate Currit");
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(section0_nodes);
			p = claim_element(section0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "I am a University professor and geospatial data scientist.\n            My research and teaching interests are in GIScience, with \n            special emphasis on Earth Observation analysis, spatial\n            databases and human-environment interaction. If there is\n            a way to do things with open source tools and data, I\n            choose to use it.");
			p_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			section1 = claim_element(div0_nodes, "SECTION", { id: true, class: true });
			var section1_nodes = children(section1);
			h21 = claim_element(section1_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t5 = claim_text(h21_nodes, "Other stuff, like an image");
			h21_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Nate Currit";
			attr_dev(h20, "class", "svelte-eilg0q");
			add_location(h20, file, 10, 8, 192);
			attr_dev(p, "class", "svelte-eilg0q");
			add_location(p, file, 11, 8, 221);
			attr_dev(section0, "id", "description");
			attr_dev(section0, "class", "svelte-eilg0q");
			add_location(section0, file, 9, 4, 157);
			attr_dev(h21, "class", "svelte-eilg0q");
			add_location(h21, file, 21, 8, 664);
			attr_dev(section1, "id", "graphic");
			attr_dev(section1, "class", "svelte-eilg0q");
			add_location(section1, file, 20, 4, 633);
			attr_dev(div0, "class", "container svelte-eilg0q");
			add_location(div0, file, 8, 0, 129);
			attr_dev(div1, "class", "bigdiv svelte-eilg0q");
			add_location(div1, file, 24, 0, 722);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, section0);
			append_dev(section0, h20);
			append_dev(h20, t1);
			append_dev(section0, t2);
			append_dev(section0, p);
			append_dev(p, t3);
			append_dev(div0, t4);
			append_dev(div0, section1);
			append_dev(section1, h21);
			append_dev(h21, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, div1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ splash });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzllZGI3NTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3NwbGFzaC1vcHQuc3ZnIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC9mNzdiMmNkNmU2YWI5ZTVmLnN2Z1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsYUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
