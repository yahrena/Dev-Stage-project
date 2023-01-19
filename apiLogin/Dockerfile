FROM python:alpine

WORKDIR /BackFast

COPY ./requirements.txt /BackFast/requirements.txt
RUN pip install -r /BackFast/requirements.txt
COPY ./app /BackFast/app
CMD ["uvicorn","app.main:app","--host","0.0.0.0","--port","8000"]