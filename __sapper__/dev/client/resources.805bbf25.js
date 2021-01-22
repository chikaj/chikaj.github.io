import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.235e545e.js';

/* src/routes/resources.svelte generated by Svelte v3.31.2 */

const file = "src/routes/resources.svelte";

function create_fragment(ctx) {
	let t0;
	let h30;
	let t1;
	let t2;
	let ul0;
	let li0;
	let t3;
	let t4;
	let li1;
	let t5;
	let t6;
	let h31;
	let t7;
	let t8;
	let ul1;
	let li2;
	let a;
	let t9;
	let t10;
	let li3;
	let t11;

	const block = {
		c: function create() {
			t0 = space();
			h30 = element("h3");
			t1 = text("Computing Resources");
			t2 = space();
			ul0 = element("ul");
			li0 = element("li");
			t3 = text("Github link");
			t4 = space();
			li1 = element("li");
			t5 = text("Github link 2");
			t6 = space();
			h31 = element("h3");
			t7 = text("Presentations");
			t8 = space();
			ul1 = element("ul");
			li2 = element("li");
			a = element("a");
			t9 = text("A Reveal.js test presentation");
			t10 = space();
			li3 = element("li");
			t11 = text("Presentation #2");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-sg6bn3\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h30 = claim_element(nodes, "H3", {});
			var h30_nodes = children(h30);
			t1 = claim_text(h30_nodes, "Computing Resources");
			h30_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			ul0 = claim_element(nodes, "UL", {});
			var ul0_nodes = children(ul0);
			li0 = claim_element(ul0_nodes, "LI", {});
			var li0_nodes = children(li0);
			t3 = claim_text(li0_nodes, "Github link");
			li0_nodes.forEach(detach_dev);
			t4 = claim_space(ul0_nodes);
			li1 = claim_element(ul0_nodes, "LI", {});
			var li1_nodes = children(li1);
			t5 = claim_text(li1_nodes, "Github link 2");
			li1_nodes.forEach(detach_dev);
			ul0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			h31 = claim_element(nodes, "H3", {});
			var h31_nodes = children(h31);
			t7 = claim_text(h31_nodes, "Presentations");
			h31_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			ul1 = claim_element(nodes, "UL", {});
			var ul1_nodes = children(ul1);
			li2 = claim_element(ul1_nodes, "LI", {});
			var li2_nodes = children(li2);
			a = claim_element(li2_nodes, "A", { href: true, target: true });
			var a_nodes = children(a);
			t9 = claim_text(a_nodes, "A Reveal.js test presentation");
			a_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			t10 = claim_space(ul1_nodes);
			li3 = claim_element(ul1_nodes, "LI", {});
			var li3_nodes = children(li3);
			t11 = claim_text(li3_nodes, "Presentation #2");
			li3_nodes.forEach(detach_dev);
			ul1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Resources";
			add_location(h30, file, 8, 0, 97);
			add_location(li0, file, 10, 4, 135);
			add_location(li1, file, 11, 4, 160);
			add_location(ul0, file, 9, 0, 126);
			add_location(h31, file, 14, 0, 190);
			attr_dev(a, "href", "https://chikaj.github.io/presentations/test.html");
			attr_dev(a, "target", "_blank");
			add_location(a, file, 16, 8, 226);
			add_location(li2, file, 16, 4, 222);
			add_location(li3, file, 17, 4, 344);
			add_location(ul1, file, 15, 0, 213);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h30, anchor);
			append_dev(h30, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, ul0, anchor);
			append_dev(ul0, li0);
			append_dev(li0, t3);
			append_dev(ul0, t4);
			append_dev(ul0, li1);
			append_dev(li1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, h31, anchor);
			append_dev(h31, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, ul1, anchor);
			append_dev(ul1, li2);
			append_dev(li2, a);
			append_dev(a, t9);
			append_dev(ul1, t10);
			append_dev(ul1, li3);
			append_dev(li3, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h30);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(ul0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(h31);
			if (detaching) detach_dev(t8);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLjgwNWJiZjI1LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
