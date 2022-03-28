export class RecipeService {
	constructor(resource) {
		this.resourceName = resource;
	}

	get URL() {
		return `https://${this.resourceName}/api/json/v1/1/random.php`
	}

	async getRecipe(){
		const response = await fetch(this.URL);
		const result = await response.json();

		return result
	}
}