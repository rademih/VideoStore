package models.helpers;

public class VideoFilter {
	
	public String title;

	public String sortBy;

	private VideoFilter() { }

	public static VideoFilter createFilter() {
		return new VideoFilter();
	}

	public VideoFilter setTitleFilter(String title) {
		this.title = title;
		return this;
	}

	public VideoFilter setSort(String sortBy) {
		if (sortBy != null && !sortBy.equals("")) {
			this.sortBy = sortBy.toLowerCase();
		} else {
			this.sortBy = "rating";
		}
		return this;
	}
}
