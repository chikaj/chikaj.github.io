import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.d17f2b3d.js';

/* src/routes/development.svelte generated by Svelte v3.31.2 */

const file = "src/routes/development.svelte";

function create_fragment(ctx) {
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let a0;
	let t5;
	let t6;
	let a1;
	let t7;
	let t8;
	let a2;
	let t9;
	let t10;
	let a3;
	let t11;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("Development");
			t1 = space();
			p0 = element("p");
			t2 = text("I like to build interesting things and I use a variety of tools to do that.");
			t3 = space();
			p1 = element("p");
			t4 = text("For building database backends and APIs, I use ");
			a0 = element("a");
			t5 = text("Django");
			t6 = text("\n    and ");
			a1 = element("a");
			t7 = text("Django Rest Framework");
			t8 = text(". Even\n    ");
			a2 = element("a");
			t9 = text("GeoDjango");
			t10 = text(" and\n    ");
			a3 = element("a");
			t11 = text("Django Rest Framework GIS");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Development");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "I like to build interesting things and I use a variety of tools to do that.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "For building database backends and APIs, I use ");
			a0 = claim_element(p1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t5 = claim_text(a0_nodes, "Django");
			a0_nodes.forEach(detach_dev);
			t6 = claim_text(p1_nodes, "\n    and ");
			a1 = claim_element(p1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t7 = claim_text(a1_nodes, "Django Rest Framework");
			a1_nodes.forEach(detach_dev);
			t8 = claim_text(p1_nodes, ". Even\n    ");
			a2 = claim_element(p1_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			t9 = claim_text(a2_nodes, "GeoDjango");
			a2_nodes.forEach(detach_dev);
			t10 = claim_text(p1_nodes, " and\n    ");
			a3 = claim_element(p1_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			t11 = claim_text(a3_nodes, "Django Rest Framework GIS");
			a3_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 0, 0, 0);
			add_location(p0, file, 4, 0, 28);
			attr_dev(a0, "href", "https://www.djangoproject.com");
			add_location(a0, file, 8, 51, 172);
			attr_dev(a1, "href", "https://www.django-rest-framework.org");
			add_location(a1, file, 9, 8, 231);
			attr_dev(a2, "href", "https://docs.djangoproject.com/en/3.1/ref/contrib/gis/");
			add_location(a2, file, 10, 4, 315);
			attr_dev(a3, "href", "https://github.com/openwisp/django-rest-framework-gis");
			add_location(a3, file, 11, 4, 402);
			add_location(p1, file, 7, 0, 117);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t4);
			append_dev(p1, a0);
			append_dev(a0, t5);
			append_dev(p1, t6);
			append_dev(p1, a1);
			append_dev(a1, t7);
			append_dev(p1, t8);
			append_dev(p1, a2);
			append_dev(a2, t9);
			append_dev(p1, t10);
			append_dev(p1, a3);
			append_dev(a3, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
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
	validate_slots("Development", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Development> was created with unknown prop '${key}'`);
	});

	return [];
}

class Development extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Development",
			options,
			id: create_fragment.name
		});
	}
}

export default Development;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcG1lbnQuNmNlN2ExZDMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
