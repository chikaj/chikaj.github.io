import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.cc05b3e6.js';

var splash = "/client/f77b2cd6e6ab9e5f.svg";

/* src/routes/index.svelte generated by Svelte v3.31.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div0;
	let h20;
	let t1;
	let t2;
	let h21;
	let t3;
	let t4;
	let div1;

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			h20 = element("h2");
			t1 = text("Nate Currit");
			t2 = space();
			h21 = element("h2");
			t3 = text("Other stuff");
			t4 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-6s0mye\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", {});
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Nate Currit");
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			h21 = claim_element(div0_nodes, "H2", {});
			var h21_nodes = children(h21);
			t3 = claim_text(h21_nodes, "Other stuff");
			h21_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Nate Currit";
			add_location(h20, file, 9, 4, 157);
			add_location(h21, file, 10, 4, 182);
			attr_dev(div0, "class", "container svelte-1uda1u");
			add_location(div0, file, 8, 0, 129);
			attr_dev(div1, "class", "bigdiv svelte-1uda1u");
			add_location(div1, file, 12, 0, 210);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, h20);
			append_dev(h20, t1);
			append_dev(div0, t2);
			append_dev(div0, h21);
			append_dev(h21, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, div1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzc0MzZiMDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3NwbGFzaC1vcHQuc3ZnIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC9mNzdiMmNkNmU2YWI5ZTVmLnN2Z1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsYUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
