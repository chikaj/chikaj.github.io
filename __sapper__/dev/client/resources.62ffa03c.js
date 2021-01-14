import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as add_location, k as insert_dev, l as append_dev, n as noop } from './client.9188dfdc.js';

/* src/routes/resources.svelte generated by Svelte v3.31.2 */

const file = "src/routes/resources.svelte";

function create_fragment(ctx) {
	let h30;
	let t0;
	let t1;
	let ul0;
	let li0;
	let t2;
	let t3;
	let li1;
	let t4;
	let t5;
	let h31;
	let t6;
	let t7;
	let ul1;
	let li2;
	let t8;
	let t9;
	let li3;
	let t10;

	const block = {
		c: function create() {
			h30 = element("h3");
			t0 = text("Computing Resources");
			t1 = space();
			ul0 = element("ul");
			li0 = element("li");
			t2 = text("Github link");
			t3 = space();
			li1 = element("li");
			t4 = text("Github link 2");
			t5 = space();
			h31 = element("h3");
			t6 = text("Presentations");
			t7 = space();
			ul1 = element("ul");
			li2 = element("li");
			t8 = text("Presentation #1");
			t9 = space();
			li3 = element("li");
			t10 = text("Presentation #2");
			this.h();
		},
		l: function claim(nodes) {
			h30 = claim_element(nodes, "H3", {});
			var h30_nodes = children(h30);
			t0 = claim_text(h30_nodes, "Computing Resources");
			h30_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			ul0 = claim_element(nodes, "UL", {});
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", {});
			var li0_nodes = children(li0);
			t2 = claim_text(li0_nodes, "Github link");
			li0_nodes.forEach(detach_dev);
			t3 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", {});
			var li1_nodes = children(li1);
			t4 = claim_text(li1_nodes, "Github link 2");
			li1_nodes.forEach(detach_dev);
			ul0_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", {});
			var h31_nodes = children(h31);
			t6 = claim_text(h31_nodes, "Presentations");
			h31_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			ul1 = claim_element(nodes, "UL", {});
			var ul1_nodes = children(ul1);
			li2 = claim_element(ul1_nodes, "LI", {});
			var li2_nodes = children(li2);
			t8 = claim_text(li2_nodes, "Presentation #1");
			li2_nodes.forEach(detach_dev);
			t9 = claim_space(ul1_nodes);
			li3 = claim_element(ul1_nodes, "LI", {});
			var li3_nodes = children(li3);
			t10 = claim_text(li3_nodes, "Presentation #2");
			li3_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h30, file, 4, 0, 21);
			add_location(li0, file, 6, 4, 59);
			add_location(li1, file, 7, 4, 84);
			add_location(ul0, file, 5, 0, 50);
			add_location(h31, file, 10, 0, 114);
			add_location(li2, file, 12, 4, 146);
			add_location(li3, file, 13, 4, 175);
			add_location(ul1, file, 11, 0, 137);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h30, anchor);
			append_dev(h30, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul0, anchor);
			append_dev(ul0, li0);
			append_dev(li0, t2);
			append_dev(ul0, t3);
			append_dev(ul0, li1);
			append_dev(li1, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, ul1, anchor);
			append_dev(ul1, li2);
			append_dev(li2, t8);
			append_dev(ul1, t9);
			append_dev(ul1, li3);
			append_dev(li3, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul0);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(ul1);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Resources", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Resources> was created with unknown prop '${key}'`);
	});

	return [];
}

class Resources extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Resources",
			options,
			id: create_fragment.name
		});
	}
}

export default Resources;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLjYyZmZhMDNjLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
