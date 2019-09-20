package hvl.dat152.model;

import hvl.dat152.model.Task.Status;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement
public class ResponseGetAllstatuses extends ServerResponse {

	private List<Status> allstatuses;

	public ResponseGetAllstatuses() {
	}

	public List<Status> getAllstatuses() {
		return allstatuses;
	}

	public void setAllstatuses(List<Status> allstatuses) {
		this.allstatuses = allstatuses;
	}
}
