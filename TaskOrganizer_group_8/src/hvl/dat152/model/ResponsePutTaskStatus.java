package hvl.dat152.model;

import hvl.dat152.model.Task.Status;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResponsePutTaskStatus extends ServerResponse {

	private Integer id;
	private Status status;

	public ResponsePutTaskStatus() {
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
