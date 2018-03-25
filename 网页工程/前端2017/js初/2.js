function clickMeEvent(obj)

{
    if (obj.innerHTML=="真的走了啊,千万别想我喂")
    {
        obj.style.display="none";
    }
    else if (obj.innerHTML=="涛涛不但帅而且可爱")
    {
        obj.innerHTML="涛涛不但真的帅而且真的可爱";
    }
    else if (obj.innerHTML=="涛涛不但真的帅而且真的可爱")
    {
        obj.innerHTML="涛涛走了别想我";
    }
    else if (obj.innerHTML=="涛涛走了别想我")
    {
        obj.innerHTML="真的走了啊,千万别想我喂";
    }
    else if (obj.innerHTML=="涛涛真的好帅")
    {
        obj.innerHTML="涛涛不但帅而且可爱";
    }
    else if (obj.innerHTML=="再点一次")
    {
        obj.innerHTML="涛涛真的好帅";
    }
    else if (obj.innerHTML=="涛涛好帅")
    {
        obj.innerHTML="再点一次";
    }
    else
    {
        obj.innerHTML="涛涛好帅";
    }
}